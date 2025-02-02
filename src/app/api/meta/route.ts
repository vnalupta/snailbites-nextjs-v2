export async function GET() {
  return Response.json({ headings: ["Person",	"Most interest in",	"Age"] })
}