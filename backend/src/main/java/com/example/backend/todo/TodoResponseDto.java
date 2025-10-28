package com.example.backend.todo;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

//서버->클라이언트
//엔터티 주요 정보를 담음

@Getter
@AllArgsConstructor
public class TodoResponseDto {
    private Integer id;
    private String content;
    private LocalDateTime createDateTime;

    // 엔터티 → DTO 변환
    public static TodoResponseDto fromEntity(Todo todo) {
        return new TodoResponseDto(
            todo.getId(),
            todo.getContent(),
            todo.getCreateDateTime()
        );
    }
}


