package com.example.backend.users;


import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {
	private final MemberRepository memberRepository;
	
	//회원 생성 메서드
	public MemberResponseDTO create(MemberCreateRequestDTO memberRequest) {
		
		// 이메일 중복 검사
        if (memberRepository.existsByEmail(memberRequest.getEmail())) {
            throw new IllegalArgumentException("중복된 이메일입니다.");
        } //IllegalArgumentException : 메서드 입력값이 잘못되었을때 던지는 표준 예외
        
        Member member = memberRequest.toEntity(); //DTO -> 엔터티로 저장
        
		Member saved = memberRepository.save(member); //저장
		
		return MemberResponseDTO.fromEntity(saved); //응답 DTO 반환
	}
	
	//회원 조회 메서드
	public MemberResponseDTO findMember(Long id) {
		Member member = memberRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 회원이 존재하지 않습니다."));
		return MemberResponseDTO.fromEntity(member);
	}
	
	//회원 전체 조회 메서드
	public List<MemberResponseDTO> findAll() {
		return memberRepository.findAll()
				.stream()
				.map(MemberResponseDTO::fromEntity)
				.toList();
		
	}
	
	//업데이트 메서드 구현
	public MemberResponseDTO update(Long id, UpdateRequestDTO dto) {
		Member member = memberRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("회원이 존재하지 않습니다."));
		
		member.update(dto.getName(), dto.getPassword());
		
		Member saved = memberRepository.save(member);
		
		return MemberResponseDTO.fromEntity(saved);
	}
}
