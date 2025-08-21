export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ msg: "Welcome to server" });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
