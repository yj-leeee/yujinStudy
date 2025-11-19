package com.example.backend.list;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String todo;

	@Column(nullable = false)
	private boolean checked; //할일 했는지 체크 (기본값은 false)
	
	public void update(String todo) {
		this.todo = todo;
	}
	
	public void toggleChecked() {
		this.checked = !this.checked;
	}
}
