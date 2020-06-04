package com.codesquad.demo.repository;

import com.codesquad.demo.domain.Accommodation;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AccommodationRepository {

    private static final String MAPPER_NAME_SPACE = "sample.mapper.accommodationMapper.";

    private final SqlSessionTemplate sqlSessionTemplate;

    public AccommodationRepository(SqlSessionTemplate sqlSessionTemplate) {
        this.sqlSessionTemplate = sqlSessionTemplate;
    }

    public List<Accommodation> getInitAccommodations() {
        return sqlSessionTemplate.selectList(MAPPER_NAME_SPACE + "initAccommodations");
    }
}
