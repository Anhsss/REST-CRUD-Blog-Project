package com.sooya.boardback.service;

import org.springframework.http.ResponseEntity;

import com.sooya.boardback.dto.request.auth.SignInRequestDto;
import com.sooya.boardback.dto.request.auth.SignInResponseDto;
import com.sooya.boardback.dto.request.auth.SignUpRequestDto;
import com.sooya.boardback.dto.response.auth.SignUpResponseDto;

public interface AuthService {

    ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);
    
}
