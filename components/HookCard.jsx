export default function HookCard({ headline, subhead }) {
    return (
      <div className="p-5 bg-white rounded-2xl shadow-md border hover:shadow-lg transition">
        <h2 className="font-bold text-lg">{headline}</h2>
        <p className="text-gray-600">{subhead}</p>
      </div>
    );
  }
  