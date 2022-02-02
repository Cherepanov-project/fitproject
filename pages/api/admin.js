import { admin_data } from "./data/admin-data";

export default function hendler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(admin_data);
  }
};