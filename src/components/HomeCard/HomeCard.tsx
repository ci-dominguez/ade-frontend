import { NavLink } from 'react-router-dom';
import { HomeCardDTO } from '../../types/api';
import NavLinkButton from '../Navigation/NavLinkButton';

interface Props extends HomeCardDTO {}

const HomeCard = ({
  id,
  mainImgUrl,
  cost,
  address,
  bedrooms,
  bathrooms,
  lotSize,
  livableAreaSize,
  yearBuilt,
  overview,
}: Props) => {
  return (
    <div className="flex flex-col">
      <NavLink to={`/homes/${id}`}>
        <img
          src={mainImgUrl}
          alt={'Image for: ' + address}
          loading="eager"
          decoding="auto"
          role="img"
          aria-label={'Image for: ' + address}
          className="rounded-xl object-cover"
        />
      </NavLink>

      <NavLink to={`/homes/${id}`}>
        <h4 className="text-2xl pt-2 font-editorial_ul underline">{address}</h4>
      </NavLink>

      <p className="mt-4 text-md">{overview}</p>

      <ul className="grid grid-cols-2 font-haas_md text-lg gap-x-3 mt-4">
        <li>${cost.toLocaleString()}</li>
        <li>Built {yearBuilt}</li>
        <li>{livableAreaSize} home</li>
        <li>{bedrooms} Bed</li>
        <li>{lotSize} lot</li>
        <li>{bathrooms} Bath</li>
      </ul>

      <NavLinkButton
        className="text-content bg-accent hover:bg-content active:bg-content hover:text-primary active:text-primary border-accent hover:border-content active:border-content mt-8"
        text="View Details"
        bgClasses="bg-content"
        arrowClasses="stroke-content group-hover:stroke-primary"
        to={`/homes/${id}`}
      />
    </div>
  );
};

export default HomeCard;
