const Shape = () => {
  return (
    <div className="absolute -top-20 -left-20 bg-slate-300 h-80 w-80 rounded-full -z-10">
        <div className="absolute top-1/2 left-1/2 bg-slate-200 rounded-full -z-10 h-56  w-56 -translate-y-1/2 -translate-x-1/2">
            <div className="absolute top-1/2 left-1/2 bg-slate-300 rounded-full -z-10 h-28  w-28 -translate-y-1/2 -translate-x-1/2"></div>
        </div>
    </div>
  )
}

export default Shape