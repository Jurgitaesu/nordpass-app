import * as React from 'react';
import './styles.scss';

interface IPassword {
  value: 'string';
  count: 'string';
}

const LeakedPasswords: React.FC = () => {
  const [leakedPasswords, setLeakedPasswords] = React.useState<IPassword[]>([]);
  const [tenLeakedPasswords, setTenLeakedPasswords] = React.useState<IPassword[] | undefined>([]);
  const [allLeakedPasswords, setAllLeakedPasswords] = React.useState<IPassword[] | undefined>([]);
  const [isAllPasswordsShown, setIsAllPasswordsShown] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string | null>('count');
  const tableOption = React.useRef<HTMLSelectElement>(null);

  const fetchPasswords = async () => {
    const res = await fetch('https://playground.nordsec.com/v2/worst-psw.json');
    const data = await res.json();
    setLeakedPasswords(data.passwords);
  };

  React.useEffect(() => {
    fetchPasswords();
  }, []);

  React.useEffect(() => {
    if (leakedPasswords) {
      const getTenPasswords = () => {
        let sortedPasswords: IPassword[] | undefined;

        if (selectedOption === 'count') {
          sortedPasswords = leakedPasswords.sort((p1: IPassword, p2: IPassword) =>
            Number(p1.count) < Number(p2.count) ? 1 : Number(p1.count) > Number(p2.count) ? -1 : 0,
          );
        }

        if (selectedOption === 'value') {
          sortedPasswords = leakedPasswords.sort((p1: IPassword, p2: IPassword) => (p1.value > p2.value ? 1 : p1.value < p2.value ? -1 : 0));
        }

        const selectedPasswords: IPassword[] | undefined = sortedPasswords?.slice(0, 10);
        setTenLeakedPasswords(selectedPasswords);
        setAllLeakedPasswords(sortedPasswords);
      };
      getTenPasswords();
    }
  }, [leakedPasswords, selectedOption]);

  const showAllPasswords = () => {
    setIsAllPasswordsShown(!isAllPasswordsShown);
  };

  const selectOption = () => {
    if (tableOption.current) {
      const option = tableOption.current.value;
      return setSelectedOption(option);
    }
  };

  const renderAllPasswords = (): React.ReactNode => {
    return allLeakedPasswords?.map((password: IPassword, index) => {
      return (
        <tr key={index}>
          <td className="table__number">{index + 1}</td>
          <td className="text-bold">{password.value}</td>
          <td className="table__count">{password.count}</td>
        </tr>
      );
    });
  };

  const renderTenPasswords = (): React.ReactNode => {
    return tenLeakedPasswords?.map((password: IPassword, index) => {
      return (
        <tr key={index}>
          <td className="table__number">{index + 1}</td>
          <td className="text-bold">{password.value}</td>
          <td className="table__count">{password.count}</td>
        </tr>
      );
    });
  };

  return (
    <section className="leaked-passwords container">
      <h3 className="leaked-passwords__title">Top leaked passwords</h3>
      <div className="leaked-passwords__header">
        <div className="text-bold">Password</div>
        <div>
          <select className="leaked-passwords__dropdown" ref={tableOption} onChange={selectOption}>
            <option value="count">Count</option>
            <option value="value">Value</option>
          </select>
        </div>
      </div>
      <table>
        <tbody>{isAllPasswordsShown ? renderAllPasswords() : renderTenPasswords()}</tbody>
      </table>
      <button className="show-all-button" onClick={showAllPasswords}>
        {`Show ${!isAllPasswordsShown ? 'all (50)' : 'less (10)'}`}
      </button>
    </section>
  );
};

export default LeakedPasswords;
