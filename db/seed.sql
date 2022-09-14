INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Salesperson", 80000, 4),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("Account Manager", 160000, 2),
       ("Accountant", 125000, 2),
       ("Legal Team Lead", 250000, 3)
       ("Lawyer", 190000, 3);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  (Cynthia, Amado, 2, NULL),
        (Veronica, Bolanos, 1, 1),
        (Stephany, Flores, 3, NULL),
        (Kim, Perez, 4, 3),
        (Roger, Sanchez, 6, 5),
        (Michelle, Lee, 5, NULL),
        (Laura, Toa, 7, NULL),
        (Carlos, Garcia, 8, 7);