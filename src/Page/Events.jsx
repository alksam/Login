const events = [
    { date: new Date(2023, 4, 1), label: 'Event 1' },
    { date: new Date(2023, 4, 15), label: 'Event 2' },
    { date: new Date(2023, 4, 27), label: 'Event 3' },
  ];
  
  const renderDays = () => {
    const daysArray = [];
  
    for (let i = 0; i < 42; i++) {
      if (i >= firstDayOfMonth && i < firstDayOfMonth + daysInMonth) {
        const dayEvents = events.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate.getDate() === i - firstDayOfMonth + 1 && eventDate.getMonth() === currentMonth.getMonth();
        });
  
        daysArray.push(
          <div key={i} className="day">
            <div className={`day-content ${dayEvents.length > 0 ? 'has-events' : ''}`}>
              {i - firstDayOfMonth + 1}
              {dayEvents.length > 0 && (
                <div className="events">
                  {dayEvents.map((event, index) => (
                    <div key={index} className="event">{event.label}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      } else {
        daysArray.push(<div key={i} className="day empty" />);
      }
    }
  
    return daysArray;
  };