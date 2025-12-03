'use client';

import { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp, FiFilter, FiSearch, FiAward, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type League = {
  id: string;
  name: string;
  logo: string;
  country: string;
};

type Team = {
  id: number;
  position: number;
  name: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[]; // W, D, L
  lastPosition?: number; // For position change indicator
};

type Sport = {
  id: string;
  name: string;
  icon: JSX.Element;
  leagues: League[];
};

const RankingPage = () => {
  const [activeSport, setActiveSport] = useState('football');
  const [activeLeague, setActiveLeague] = useState('premier-league');
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for sports and leagues
  const sports: Sport[] = [
    {
      id: 'football',
      name: 'Football',
      icon: <FiAward className="w-5 h-5" />,
      leagues: [
        { id: 'premier-league', name: 'Premier League', logo: '/images/leagues/premier-league.png', country: 'England' },
        { id: 'la-liga', name: 'La Liga', logo: '/images/leagues/laliga.png', country: 'Spain' },
        { id: 'bundesliga', name: 'Bundesliga', logo: '/images/leagues/bundesliga.png', country: 'Germany' },
        { id: 'serie-a', name: 'Serie A', logo: '/images/leagues/seriea.png', country: 'Italy' },
        { id: 'ligue-1', name: 'Ligue 1', logo: '/images/leagues/ligue1.png', country: 'France' },
      ],
    },
    {
      id: 'basketball',
      name: 'Basketball',
      icon: <FiTrendingUp className="w-5 h-5" />,
      leagues: [
        { id: 'nba', name: 'NBA', logo: '/images/leagues/nba.png', country: 'USA' },
        { id: 'euroleague', name: 'EuroLeague', logo: '/images/leagues/euroleague.png', country: 'Europe' },
      ],
    },
  ];

  // Generate mock team data
  const generateMockTeams = (leagueId: string): Team[] => {
    const teamNames: Record<string, string[]> = {
      'premier-league': [
        'Manchester City', 'Liverpool', 'Chelsea', 'Tottenham', 'Arsenal',
        'Manchester United', 'West Ham', 'Leicester', 'Brighton', 'Wolves'
      ],
      'la-liga': ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla', 'Real Betis'],
      'nba': ['Phoenix Suns', 'Golden State Warriors', 'Memphis Grizzlies', 'Miami Heat', 'Boston Celtics'],
    };

    const defaultTeams = [
      'Team A', 'Team B', 'Team C', 'Team D', 'Team E',
      'Team F', 'Team G', 'Team H', 'Team I', 'Team J'
    ];

    const selectedTeams = teamNames[leagueId as keyof typeof teamNames] || defaultTeams;

    return selectedTeams.map((team, index) => {
      const played = 38;
      const won = Math.floor(Math.random() * 15) + 15;
      const drawn = Math.floor(Math.random() * 10) + 5;
      const lost = played - won - drawn;
      const goalsFor = Math.floor(Math.random() * 40) + 40;
      const goalsAgainst = Math.floor(Math.random() * 30) + 20;
      const goalDifference = goalsFor - goalsAgainst;
      const points = won * 3 + drawn;
      const form = Array(5).fill(0).map(() => 
        ['W', 'D', 'L'][Math.floor(Math.random() * 3)]
      );

      return {
        id: index + 1,
        position: index + 1,
        name: team,
        logo: `/images/teams/${team.toLowerCase().replace(/\s+/g, '-')}.png`,
        played,
        won,
        drawn,
        lost,
        goalsFor,
        goalsAgainst,
        goalDifference,
        points,
        form,
        lastPosition: Math.max(1, Math.min(selectedTeams.length, index + (Math.random() > 0.5 ? -1 : 1))),
      };
    }).sort((a, b) => b.points - a.points)
      .map((team, index) => ({ ...team, position: index + 1 }));
  };

  // Simulate data fetching
  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const data = generateMockTeams(activeLeague);
      setTeams(data);
      setIsLoading(false);
    }, 800);
  }, [activeLeague]);

  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPositionChange = (current: number, last?: number) => {
    if (!last) return null;
    if (current < last) return <FiChevronUp className="text-green-500" />;
    if (current > last) return <FiChevronDown className="text-red-500" />;
    return <span className="text-gray-400">-</span>;
  };

  const getFormColor = (result: string) => {
    switch (result) {
      case 'W': return 'bg-green-100 text-green-800';
      case 'D': return 'bg-yellow-100 text-yellow-800';
      case 'L': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-700 bg-opacity-50 px-4 py-2 rounded-full mb-6">
              <FiBarChart2 className="w-5 h-5 mr-2" />
              <span className="font-medium">LIVE RANKINGS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports Rankings</h1>
            <p className="text-xl text-blue-100">
              Stay updated with the latest standings from your favorite leagues
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Sport and League Selector */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Sport Tabs */}
            <div className="flex overflow-x-auto pb-2 md:pb-0">
              <div className="flex space-x-1">
                {sports.map((sport) => (
                  <button
                    key={sport.id}
                    onClick={() => {
                      setActiveSport(sport.id);
                      setActiveLeague(sport.leagues[0].id);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center transition-colors ${
                      activeSport === sport.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{sport.icon}</span>
                    {sport.name}
                  </button>
                ))}
              </div>
            </div>

            {/* League Selector */}
            <div className="relative">
              <select
                value={activeLeague}
                onChange={(e) => setActiveLeague(e.target.value)}
                className="block appearance-none w-full md:w-64 bg-white border border-gray-200 hover:border-gray-300 px-4 py-2 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sports
                  .find(sport => sport.id === activeSport)
                  ?.leagues.map((league) => (
                    <option key={league.id} value={league.id}>
                      {league.name}
                    </option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FiChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search teams..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Filter by:</span>
              <button className="flex items-center text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                <FiFilter className="mr-2" />
                All
              </button>
              <button className="flex items-center text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                <FiTrendingUp className="mr-2" />
                Top 5
              </button>
            </div>
          </div>
        </div>

        {/* Ranking Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {isLoading ? (
            // Skeleton Loader
            <div className="p-6">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="flex items-center py-4 border-b border-gray-100">
                  <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse mr-4"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                  <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Team
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      P
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      W
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      D
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      L
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      GF
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      GA
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      GD
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PTS
                    </th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Form
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTeams.map((team) => (
                    <tr 
                      key={team.id} 
                      className={`hover:bg-gray-50 transition-colors ${
                        team.position <= 4 ? 'bg-blue-50' : 
                        team.position >= filteredTeams.length - 3 ? 'bg-red-50' : ''
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center">
                          <span className="w-6 text-center">{team.position}</span>
                          {getPositionChange(team.position, team.lastPosition)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 mr-3">
                            <img className="h-8 w-8 rounded-full" src={team.logo} alt={team.name} />
                          </div>
                          <div className="text-sm font-medium text-gray-900">{team.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {team.played}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {team.won}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {team.drawn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {team.lost}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {team.goalsFor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {team.goalsAgainst}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${
                        team.goalDifference > 0 ? 'text-green-600' : 
                        team.goalDifference < 0 ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-blue-600">
                        {team.points}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-1 justify-center">
                          {team.form.map((result, i) => (
                            <span 
                              key={i} 
                              className={`inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-medium ${getFormColor(result)}`}
                            >
                              {result}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!isLoading && filteredTeams.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No teams found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded mr-2"></div>
            <span>Champions League</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-100 border border-green-300 rounded mr-2"></div>
            <span>Europa League</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-100 border border-red-300 rounded mr-2"></div>
            <span>Relegation Zone</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RankingPage;