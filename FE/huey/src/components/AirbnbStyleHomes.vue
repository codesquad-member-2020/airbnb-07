<template>
  <div class="map-base-container">
    <!-- <div class="flex nav">
      <div class="flex w-full bg-white search-container items-center">
        <div class="search-input lg:w-1/2 w-full">
          <address-autocomplete
            v-model="place"
            custom-class="flex w-full shadow appearance-none border rounded text-grey-dark items-center"
          ></address-autocomplete>
        </div>
      </div>
    </div> -->
    <div
      class="flex w-full p-6 items-center border-b border-grey-light filter-container"
    >
      <div class="flex items-center ml-auto">
        <span class="mr-2">Show Map</span>
        <div class="w-10">
          <toggle-switch v-model="showMap" />
        </div>
      </div>
    </div>
    <div class="flex pt-4 room-map-container">
      <div class="h-12 py-2" :class="[showMap ? 'w-1/2' : 'w-full']">
        <div class="pl-2 mb-2">
          <div class="font-semibold text-2xl">{{ roomListTitle }}</div>
        </div>
        <room-list
          :rooms="rooms"
          @room:hovered="handleRoomHovered"
          @room:unhovered="handleRoomUnhovered"
          :grid-class="showMap ? 'w-full' : 'w-1/2'"
        ></room-list>
        <div class="flex mt-4 h-32 justify-center">
          <simple-paginator
            :meta="roomMeta"
            v-if="roomMeta"
            @pagination:switched="fetchRooms"
            :pages-per-section="3"
          ></simple-paginator>
        </div>
      </div>
      <div class="w-1/2 py-2 pin-r" :class="{ 'map-before': !showMap }">
        <room-map
          @bounds:changed="handleBoundsChanged"
          :rooms="rooms"
          :hovered-room="hoveredRoom"
          :center="center"
          :lat="place.lat"
          :lng="place.lng"
        ></room-map>
      </div>
    </div>
  </div>
</template>

<script>
import roomApi from '@/api/rooms';
import RoomMap from '@/components/Rooms/RoomMap';
import RoomList from '@/components/Rooms/RoomList';
import ToggleSwitch from '@/components/Rooms/ToggleSwitch';
import SimplePaginator from '@/components/Rooms/SimplePaginator';
import AddressAutocomplete from '@/components/Rooms/AddressAutocomplete';
import { mapState } from 'vuex';

export default {
  // name: 'App',
  components: {
    RoomMap,
    RoomList,
    ToggleSwitch,
    SimplePaginator,
    // AddressAutocomplete,
  },
  props: {
    defaultLat: {
      type: Number,
      default: 42.35843,
    },
    defaultLng: {
      type: Number,
      default: -71.05977,
    },
    defaultAddress: {
      type: String,
      default: 'Seattle',
    },
  },
  created() {
    this.setSelectedCountry();
    roomApi.setCenter({ lat: this.place.lat, lng: this.place.lng });
  },
  data() {
    return {
      place: {
        lat: 0,
        lng: 0,
        address: this.defaultAddress,
      },
      rooms: [],
      hoveredRoom: null,
      roomMeta: null,
      mapBounds: null,
      showMap: true,
    };
  },
  computed: {
    ...mapState(['selectedCountry']),
    center() {
      return {
        lat: this.place.lat,
        lng: this.place.lng,
      };
    },
    roomListTitle() {
      let title = '';
      switch (true) {
        case this.roomMeta === null:
          title = 'loading ...';
          break;
        case this.roomMeta.total === 0:
          title = 'No results';
          break;
        case this.roomMeta.total === 1:
          title = '1 result';
          break;
        default:
          title = `${this.roomMeta.total} results`;
          break;
      }
      return title;
    },
  },
  methods: {
    setSelectedCountry() {
      switch (this.selectedCountry) {
        case '시애틀':
          this.place.lat = 47.606209;
          this.place.lng = -122.33207;
          break;
        case '보스턴':
          this.place.lat = 42.35843;
          this.place.lng = -71.05977;
          break;
        case '뉴욕':
          this.place.lat = 40.6643;
          this.place.lng = -73.9385;
          break;
      }
    },
    handleBoundsChanged({ mapBounds }) {
      // console.log(mapBounds);
      this.mapBounds = mapBounds;
      this.fetchRooms(1);
    },
    getBounds() {
      return {
        minLat: this.mapBounds.getSouthWest().lat(),
        maxLat: this.mapBounds.getNorthEast().lat(),
        minLng: this.mapBounds.getSouthWest().lng(),
        maxLng: this.mapBounds.getNorthEast().lng(),
      };
    },
    async fetchRooms(page = 1) {
      try {
        let { minLat, maxLat, minLng, maxLng } = this.getBounds();
        console.log(minLat, maxLat, minLng, maxLng);
        let res = await roomApi.getAll(
          `/api/rooms?page=${page}&min_lng=${minLng}&max_lng=${maxLng}&min_lat=${minLat}&max_lat=${maxLat}`,
        );
        this.rooms = res.data;
        this.roomMeta = res.meta;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        console.log(e);
      }
    },
    handleRoomHovered(room) {
      this.hoveredRoom = room;
    },
    handleRoomUnhovered() {
      this.hoveredRoom = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.map-base-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .search-container {
    top: 0;
    height: 80px;
    background: white;
    z-index: 10;
  }
  .filter-container {
    margin-top: 80px;
    top: 80px;
    background: white;
    z-index: 10;
  }
  .room-map-container {
    // overflow: hidden;
  }
  .map-before {
    position: absolute;
    left: -1000%;
  }
  .map-after {
    position: relative;
  }
}
</style>
