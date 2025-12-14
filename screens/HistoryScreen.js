const HistoryScreen = () => {
  const { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } = window.Recharts || {};
  const Layout = window.Layout;
  const RECENT_PRACTICES = window.RECENT_PRACTICES;
  const RoutePath = window.RoutePath;

  const data = [
    { name: 'Reading', value: 82 },
    { name: 'Listening', value: 70 },
    { name: 'Speaking', value: 60 },
    { name: 'Writing', value: 85 },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black text-gray-900">My Practice History</h1>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
            <span className="material-symbols-outlined text-lg">swap_vert</span> Sort by Date
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
            <span className="material-symbols-outlined text-lg">filter_list</span> Filter by Subject
          </button>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900">Overall Performance</h2>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-bold text-gray-900">82%</span>
              <span className="text-sm font-medium text-success flex items-center"><span className="material-symbols-outlined text-sm">arrow_upward</span> +2%</span>
              <span className="text-sm text-gray-500 ml-1">vs. last month</span>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={60}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#137fec" opacity={0.2 + (index * 0.1)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* History Grid */}
        <h2 className="text-xl font-bold text-gray-900 mt-4">Recent Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECENT_PRACTICES.map((practice) => (
            <div key={practice.id} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4">
              <div>
                <p className="text-sm text-gray-500">{practice.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{practice.title}</h3>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium">Accuracy/Score</p>
                  <p className={`text-2xl font-bold mt-1 ${
                    practice.score?.includes('%') 
                      ? (parseInt(practice.score) >= 80 ? 'text-success' : 'text-warning')
                      : 'text-primary'
                  }`}>
                    {practice.score}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium">Time Spent</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{practice.timeSpent}</p>
                </div>
              </div>

              {/* Visual Progress Bar just for decoration */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${practice.type === 'Reading' ? 'bg-warning' : practice.type === 'Listening' ? 'bg-success' : 'bg-primary'}`} 
                  style={{ width: practice.accuracy ? `${practice.accuracy}%` : '75%' }}
                ></div>
              </div>

              <button 
                onClick={() => window.location.href = RoutePath.REPORT}
                className="w-full py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors mt-2">
                View Report
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

window.HistoryScreen = HistoryScreen;
