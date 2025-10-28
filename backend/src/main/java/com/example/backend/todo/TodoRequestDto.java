package com.example.backend.todo;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

//할일을 새로 만들거나 수정용
//보통 id는 필요없고 content만 있으면 됨(클라이언트->서버)

@Getter
@Setter
public class TodoRequestDto {
    private String content;

    // DTO → 엔터티 변환
    public Todo toEntity() {
        return new Todo(this.content);
    }
}
