package com.spring.boot.app.springboot_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.boot.app.springboot_app.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
