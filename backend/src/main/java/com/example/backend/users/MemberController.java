package com.example.backend.users;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	//회원 생성
	@PostMapping("/create")
	public MemberResponseDTO create(@Valid @RequestBody MemberCreateRequestDTO memberCreateRequestDTO) {
		return memberService.create(memberCreateRequestDTO);
	}
	
	//회원 조회
	@GetMapping("/findMember/{id}")
	public MemberResponseDTO findMember(@PathVariable("id") Long id) {
		return memberService.findMember(id);
	}
	
	//회원 전체 조회
	@GetMapping("/findMembers")
	public List<MemberResponseDTO> findAll(){
		return memberService.findAll();
	}
	
	//회원 수정
	@PatchMapping("/update/{id}")
	public MemberResponseDTO update(@PathVariable("id") Long id, @RequestBody UpdateRequestDTO dto) {
		return memberService.update(id, dto);
	}
}
