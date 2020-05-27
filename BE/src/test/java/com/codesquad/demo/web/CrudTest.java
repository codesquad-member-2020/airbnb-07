package com.codesquad.demo.web;

import com.codesquad.demo.domain.TestRepository;
import com.codesquad.demo.domain.repotest.Data;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CrudTest {

    @Autowired
    private TestRepository testRepository;

    @Test
    public void 테스트가_제대로_저장된다(){
        com.codesquad.demo.domain.repotest.Test test = testRepository.findById(1L).get();
        int previousSize = test.getDatas().size();

        List<Data> testDatas = test.getDatas();
        testDatas.add(new Data("data"));
        testRepository.save(test);

        com.codesquad.demo.domain.repotest.Test testAfterSave = testRepository.findById(1L).get();
        int afterSize = testAfterSave.getDatas().size();

        assertThat(afterSize).isGreaterThan(previousSize);
    }
}
