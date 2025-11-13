package com.example.backend.users;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
public class MemberCreateRequestDTO {
	@NotBlank(message = "이름이 비었습니다.")
	private String name;
	
	
	//@Email에는 @NotBlank 필수 
	//(없으면 공백도 허용이 되기 때문에 항상 두개를 조합해서 사용 할 것)
	@Email(message = "이메일 형식이 아닙니다.") 
	@NotBlank(message = "이메일이 비었습니다.")
	private String email;
	
	@NotBlank(message = "비밀번호가 비었습니다.")
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
