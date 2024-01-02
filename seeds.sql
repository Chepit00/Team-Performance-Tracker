INSERT INTO department (name) VALUES
('Engineering')
('TeamLead')
('Operators')
('Machinist')

INSERT INTO role (title, salary, department_id) VALUES
('Maintence Engineer, 95000, 1')
('Manufacturing Engineer, 110000, 1')
('Quality Engineer, 98000, 1')
('Piston Lead, 70000, 2')
('Liner Lead, 68000, 2')
('Quality Lead, 80000, 2')
('Tech A, 55000, 3')
('Tech B, 52000, 3')
('Tech C, 65000, 3')
('Machinist One, 65000, 4')
('Machinist Two, 66000, 4')
('Machinist Three, 70000, 4')
('Machinist Four, 72000, 4')


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Johnny', 'Smith', 1, NULL),    -- Maintenance Engineer
  ('Jane', 'Doe', 4, 1),           -- Piston Lead (managed by Johnny)
  ('Jim', 'Johnson', 7, 1),        -- Tech A (managed by Johnny)
  ('Jack', 'Williams', 10, 2),     -- Machinist One (managed by Jane)
  ('Jill', 'Jones', 11, 2),        -- Machinist Two (managed by Jane)
  ('Jake', 'Brown', 8, 1),         -- Tech B (managed by Johnny)
  ('Janet', 'Miller', 5, 3),       -- Liner Lead (managed by Jim)
  ('John', 'Smithson', 6, 3),      -- Quality Lead (managed by Jim)
  ('Joan', 'Davis', 9, 3),         -- Tech C (managed by Jim)
  ('Justin', 'Clark', 12, 4),      -- Machinist Three (managed by Jack)
  ('Jenny', 'Wilson', 13, 4),      -- Machinist Four (managed by Jack)
  ('Jerry', 'Robinson', 2, NULL),  -- Manufacturing Engineer
  ('Jessica', 'Thomas', 3, NULL);  -- Quality Engineer