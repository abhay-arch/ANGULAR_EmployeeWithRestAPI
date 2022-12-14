package com.npci.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.npci.employee.entity.Department;


@RepositoryRestResource(path = "department")
@CrossOrigin("http://localhost:4200/")
public interface DepartmentRepository extends JpaRepository<Department,Integer>{

}

