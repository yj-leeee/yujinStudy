package com.example.backend.users;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberResponseDTO {
	private Long id;
	private String email;
	private String name;
	private LocalDateTime createdAt;
	
	
	public static MemberResponseDTO fromEntity(Member member) {
		return MemberResponseDTO.builder()
				.id(member.getId())
				.email(member.getEmail())
				.name(member.getName())
				.createdAt(member.getCreatedAt())
				.build();
	}


	
}
