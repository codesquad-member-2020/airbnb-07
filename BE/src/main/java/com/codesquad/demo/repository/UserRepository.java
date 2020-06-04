package com.codesquad.demo.repository;

import com.codesquad.demo.domain.mybatis.TblUser;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {

    private static final String MAPPER_NAME_SPACE = "sample.mapper.userMapper.";

    private final SqlSessionTemplate sqlSessionTemplate;

    public UserRepository(SqlSessionTemplate sqlSessionTemplate) {
        this.sqlSessionTemplate = sqlSessionTemplate;
    }

    public List<TblUser> getUserAll() {
        return sqlSessionTemplate.selectList(MAPPER_NAME_SPACE + "selectUserInfoAll");
    }
}
