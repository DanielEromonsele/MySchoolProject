const WeeklyReport = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-1 w-full h-full gap-6">
      <div className=" lg:col-span-3 col-span-1  h-[400px] rounded-lg border-slate-300 border ">
        <p className="m-4 text-blue-950 font-semibold">Student's Profile</p>
        <div
          className="grid 
        grid-cols-2  h-[300px] gap-2 lg:w-[500px]"
        >
          <div className="col-span-1 h-full">
            <p className="p-4 ">Student's Name</p>
            <p className="p-4 ">Year</p>
            <p className="p-4 ">Class</p>
            <p className="p-4 ">Report Type</p>
            <p className="p-4 ">Teacher's Name</p>
          </div>
          <div className="col-span-1 h-full ">
            <div className="p-4 text-slate-500">Michael Philips</div>
            <div className="p-4 text-slate-500">2024</div>
            <div className="p-4 text-slate-500">Jss 2</div>
            <div className="p-4 text-slate-500">Weekly</div>
            <div className="p-4 text-slate-500">Daniel Eromonsele</div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 h-[400px] rounded-lg  border-slate-300 border ">
        <p className="m-4 text-blue-950 font-semibold">Weekly Report</p>
        <div
          className="grid 
        grid-cols-2  h-[300px] gap-2"
        >
          <div className="col-span-1 h-full">
            <p className="p-4 ">Class Attendance</p>
            <p className="p-4 ">Assignments</p>
            <p className="p-4 "> Quizzes Taken</p>
            <p className="p-4 ">Tests Taken</p>
          </div>
          <div className="col-span-1 h-full ">
            <div className="p-4 text-slate-500">35/50</div>
            <div className="p-4 text-slate-500">25/30</div>
            <div className="p-4 text-slate-500">19/25</div>
            <div className="p-4 text-slate-500">Nil</div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 h-[250px] rounded-lg border border-slate-300 ">
        <h1 className="m-4 text-blue-950 font-semibold ">Overview</h1>
        <div className="m-4 mt-6  grid grid-cols-3 gap-5 h-[150px]">
          <div className="col-span-1 border border-blue-200  rounded-xl cursor-pointer hover:shadow-lg flex p-3 items-center transition-all duration-1000">
            <div>
              <div className="text-[30px]">70%</div>
              <div className="text-slate-400">Attendance Percentage</div>
            </div>
          </div>
          <div className="col-span-1 border border-blue-200  rounded-xl cursor-pointer hover:shadow-lg flex p-3 items-center transition-all duration-1000">
            <div>
              <div className="text-[30px]">83%</div>
              <div className="text-slate-400">Overall Percentage</div>
            </div>
          </div>
          <div className="col-span-1 border border-blue-200  rounded-xl cursor-pointer hover:shadow-lg flex p-3 items-center transition-all duration-1000">
            <div>
              <div className="text-[30px]">A</div>
              <div className="text-slate-400">Grade</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-5 h-[200px] rounded-lg border border-slate-300">
        <p className="m-4 text-blue-950 font-semibold">Remarks</p>
      </div>
    </div>
  );
};

export default WeeklyReport;
