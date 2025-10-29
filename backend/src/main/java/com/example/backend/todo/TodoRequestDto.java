package com.example.backend.todo;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//할일을 새로 만들거나 수정용
//보통 id는 필요없고 content만 있으면 됨(클라이언트->서버)

@NoArgsConstructor
@Setter
@Getter
@Builder
public class TodoRequestDto {
    private String content;

   public Todo toEntity() {
	   return Todo.builder()
			   .content(this.content)
			   .createDateTime(LocalDateTime.now())
			   .build();
   }
}
