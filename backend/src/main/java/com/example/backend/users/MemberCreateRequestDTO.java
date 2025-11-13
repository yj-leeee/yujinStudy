package com.example.backend.users;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
public class MemberCreateRequestDTO {
	private String name;
	private String email;
	private String password;
	
	//DTO -> 엔터티 변환 메서드
	public Member toEntity() {
		return Member.builder()
				.name(this.name)
				.email(this.email)
				.password(this.password)
				.build();
	}
}
