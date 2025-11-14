package com.example.backend.users;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/member")
public class MemberController {
	private final MemberService memberService;
	
	@PostMapping("/create")
	public MemberResponseDTO create(@Valid @RequestBody MemberCreateRequestDTO memberCreateRequestDTO) {
		return memberService.create(memberCreateRequestDTO);
	}
}
