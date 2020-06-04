<template>
  <div
    v-if="
      !this.$store.state.renderSearchData.length ||
      this.$store.state.isSearchWait
    "
    class="loading-container"
  >
    <LoadingSpinner />
  </div>
  <div v-else class="map-base-container">
    <div v-if="this.$store.state.isOpenModal">
      <div class="background" ref="background" @click="isModalRender" />
      <div class="reservation-modal-wrap">
        <ReservationModalItem />
      </div>
    </div>
    <div
      v-else
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
          <div class="text-2xl" style="color: #ff385c;">
            {{ roomListTitle }}
          </div>
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
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { mapState } from 'vuex';
import ReservationModalItem from '@/components/main/ReservationModalItem';

export default {
  components: {
    RoomMap,
    RoomList,
    ToggleSwitch,
    SimplePaginator,
    LoadingSpinner,
    ReservationModalItem,
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
      default: 'Boston',
    },
  },
  created() {
    this.setCenterLocation();
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
  watch: {
    rooms: function () {
      this.place.lat = this.selectedLocation.lat;
      this.place.lng = this.selectedLocation.lng;
    },
  },
  computed: {
    ...mapState(['selectedCountry', 'selectedLocation']),
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
          title = '숙소가 없어요 😱';
          break;
        case this.roomMeta.total === 1:
          title = '숙소가 하나 있네요! 🤩';
          break;
        default:
          title = `${this.roomMeta.total} 개의 숙소가 있네요! 🥳`;
          break;
      }
      return title;
    },
  },
  methods: {
    isModalRender(e) {
      this.$store.commit('setOpenModal');
    },
    setCenterLocation() {
      this.place.lat = this.selectedLocation.lat;
      this.place.lng = this.selectedLocation.lng;
    },
    handleBoundsChanged({ mapBounds }) {
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
.result-img-container {
  display: inline-block;
  width: 80px;
}

.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.map-base-container {
  font-family: inherit, 'Avenir', Helvetica, Arial, sans-serif;
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
  .map-before {
    position: absolute;
    left: -1000%;
  }
  .map-after {
    position: relative;
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3500px;
  z-index: 5;
  background-color: #00000080;
}

.reservation-modal-wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  width: 450px !important;
  height: 750px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  z-index: 10;
  animation-name: ReservationModal;
  animation-duration: 0.2s;
  animation-timing-function: cubic-bezier(0.17, 0.67, 0.62, 1.64);
  animation-fill-mode: both;
  @keyframes ReservationModal {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}
</style>
