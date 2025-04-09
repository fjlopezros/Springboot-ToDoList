package com.spring.boot.app.springboot_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring.boot.app.springboot_app.model.Task;
import com.spring.boot.app.springboot_app.repository.TaskRepository;

import java.util.List;

@RestController
@RequestMapping("/api/tareas")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @GetMapping
    public List<Task> getTask(){
        return taskRepository.findAll();
    }

    @PostMapping
    public Task saveTask(@RequestBody Task task){
        return taskRepository.save(task);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id){
        return taskRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id,
                                           @RequestBody Task updateTask){
        return taskRepository.findById(id)
                .map(_ -> {
                    updateTask.setId(id);
                    return ResponseEntity.ok(taskRepository.save(updateTask));
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Task> deleteTask(@PathVariable Long id){
        if(taskRepository.existsById(id)){
            taskRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}