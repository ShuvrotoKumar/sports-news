const ClubsRanking = () => {
  const clubs = [
    { id: 1, name: 'Manchester City', gp: 38, w: 29, d: 6, l: 3, f: 99, a: 26, gd: 73, pts: 93 },
    { id: 2, name: 'Liverpool', gp: 38, w: 28, d: 8, l: 2, f: 94, a: 26, gd: 68, pts: 92 },
    { id: 3, name: 'Chelsea', gp: 38, w: 21, d: 11, l: 6, f: 76, a: 33, gd: 43, pts: 74 },
    { id: 4, name: 'Tottenham', gp: 38, w: 22, d: 5, l: 11, f: 69, a: 40, gd: 29, pts: 71 },
    { id: 5, name: 'Arsenal', gp: 38, w: 22, d: 3, l: 13, f: 61, a: 48, gd: 13, pts: 69 },
  ];

  return (
    <div className="bg-white text-black rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-semibold mb-4">Clubs Ranking</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-black-500">
          <thead>
            <tr className=" text-left">
              <th className="p-2">#</th>
              <th className="p-2 text-left">Club</th>
              <th className="p-2 text-center">GP</th>
              <th className="p-2 text-center">W</th>
              <th className="p-2 text-center">D</th>
              <th className="p-2 text-center">L</th>
              <th className="p-2 text-center">F</th>
              <th className="p-2 text-center">A</th>
              <th className="p-2 text-center">GD</th>
              <th className="p-2 text-center">PTS</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club, index) => (
              <tr key={club.id} className="border-b border-black-500 ">
                <td className="p-2 text-black0">{index + 1}</td>
                <td className="p-2 font-medium">{club.name}</td>
                <td className="p-2 text-center">{club.gp}</td>
                <td className="p-2 text-center">{club.w}</td>
                <td className="p-2 text-center">{club.d}</td>
                <td className="p-2 text-center">{club.l}</td>
                <td className="p-2 text-center">{club.f}</td>
                <td className="p-2 text-center">{club.a}</td>
                <td className="p-2 text-center font-semibold">+{club.gd}</td>
                <td className="p-2 text-center font-bold text-primary">{club.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-right">
        <button className="text-sm text-red-600 hover:underline">View Full Table →</button>
      </div>
    </div>
  );
};

export default ClubsRanking;
