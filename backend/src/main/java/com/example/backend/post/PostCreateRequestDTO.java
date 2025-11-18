package com.example.backend.post;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED) 
public class PostCreateRequestDTO {
	@NotBlank
	@Size(min = 1, max = 10)
	private String title;
	
	@NotBlank
	@Size(min = 1, max = 3000)
	private String content;
	
	@NotBlank
	private String author;
	
	public Post toEntity() {
		return Post.builder()
				.title(this.title)
				.content(this.content)
				.author(this.author)
				.build();
	}
	
}
