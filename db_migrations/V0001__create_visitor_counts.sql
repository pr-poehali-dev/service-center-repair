CREATE TABLE IF NOT EXISTS t_p94662151_service_center_repai.visitor_counts (
  branch_id VARCHAR(50) PRIMARY KEY,
  count BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO t_p94662151_service_center_repai.visitor_counts (branch_id, count)
VALUES ('moscow', 0), ('irkutsk', 0)
ON CONFLICT (branch_id) DO NOTHING;
