package com.codesquad.demo.web.controller;

import com.codesquad.demo.domain.repotest.Data;
import com.codesquad.demo.domain.repotest.Test;
import com.codesquad.demo.domain.TestRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequiredArgsConstructor
@RequestMapping("test")
public class TestController {

    private final TestRepository testRepository;
    private final Logger logger = LoggerFactory.getLogger(TestController.class);

    @GetMapping("{data}")
    public Test getTest(@PathVariable String data) {

        Test test = testRepository.findById(1L).get();

        test.addData(new Data(data));

        logger.info("test : {}", test);

        try {
            return testRepository.save(test);
        } catch (Exception e) {
            e.printStackTrace();
            return new Test();
        }
    }
}
