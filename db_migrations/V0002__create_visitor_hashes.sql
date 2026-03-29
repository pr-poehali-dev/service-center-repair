CREATE TABLE IF NOT EXISTS t_p94662151_service_center_repai.visitor_hashes (
  hash VARCHAR(64) PRIMARY KEY,
  branch_id VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
