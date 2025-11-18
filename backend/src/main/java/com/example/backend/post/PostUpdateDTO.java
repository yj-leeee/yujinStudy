package com.example.backend.post;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PostUpdateDTO {

	@Size(max = 100)
	private String title;
	
	@Size(max = 3000)
	private String content;
}
