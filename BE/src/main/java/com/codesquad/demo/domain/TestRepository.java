package com.codesquad.demo.domain;

import com.codesquad.demo.domain.repotest.Test;
import org.springframework.data.repository.CrudRepository;

public interface TestRepository extends CrudRepository<Test, Long> {
}
