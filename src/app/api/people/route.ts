export async function GET() {
  return Response.json([
    {name: "Chris",	interest: "HTML tables", age: 22 },
    {name: "Dennis",	interest: "Web accessibility", age: 45 },
    {name: "Sarah",	interest: "JavaScript frameworks", age: 29 },
    {name: "Karen",	interest: "Web accessibility", age: 36 }
  ])
}