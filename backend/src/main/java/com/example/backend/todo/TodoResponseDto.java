package com.example.backend.todo;

import java.time.LocalDateTime;

import lombok.Getter;

//서버->클라이언트
//엔터티 주요 정보를 담음

@Getter
public class TodoResponseDto {
	private Integer id;
	private String content;
	private LocalDateTime createDateTime;
}
