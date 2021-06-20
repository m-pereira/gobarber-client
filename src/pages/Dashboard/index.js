import React, { useEffect, useMemo, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
  setMilliseconds,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import api from '~/services/api';
import { Container, Time } from './styles';

// it should be in api
const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const handlePrevDay = () => setDate(subDays(date, 1));
  const handleNextDay = () => setDate(addDays(date, 1));

  useEffect(() => {
    const loadSchedule = async () => {
      const response = await api.get('schedule', { params: { date } });

      // my timezone was not working :/
      // const { timezone } = Intl.DateTimeFormat().resolvedOptions;

      const data = range.map((hour) => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );

        const compareDate = utcToZonedTime(checkDate, 'America/Sao_Paulo');

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedule(data);
    };

    loadSchedule();
  }, [date]);

  return (
    <Container>
      <header>
        <button type='button' onClick={handlePrevDay}>
          <MdChevronLeft size={36} color='#fff' />
        </button>
        <strong>{dateFormatted}</strong>
        <button type='button' onClick={handleNextDay}>
          <MdChevronRight size={36} color='#fff' />
        </button>
      </header>

      <ul>
        {schedule.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em Aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
};

export default Dashboard;
