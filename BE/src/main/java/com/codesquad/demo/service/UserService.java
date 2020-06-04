package com.codesquad.demo.service;

import com.codesquad.demo.domain.mybatis.TblUser;
import com.codesquad.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<TblUser> getUserAll() {
        return userRepository.getUserAll();
    }
}
