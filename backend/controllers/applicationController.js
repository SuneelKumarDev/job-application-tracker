const db =require('../db');

// Get all job applications
exports.getApplications =(req, res) => {
  const query = 'SELECT * FROM applications';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Add a new job application
exports.addApplication =(req, res) => {
  const { company, role, status, applied_date } = req.body;
  const query = 'INSERT INTO applications (company, role, status, applied_date) VALUES (?, ?, ?, ?)';
  db.query(query, [company, role, status, applied_date], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Application added successfully' });
  });
};

// Update a job application
exports.updateApplication =(req, res) => {
  const { id } = req.params;
  const { company, role, status, applied_date } = req.body;
  const query = 'UPDATE applications SET company=?, role=?, status=?, applied_date=? WHERE id=?';
  db.query(query, [company, role, status, applied_date, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Application updated successfully' });
  });
};

// Delete a job application
exports.deleteApplication =(req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM applications WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Application deleted successfully' });
  });
};
