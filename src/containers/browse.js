import React, { useState, useContext } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import logo from '../logo.svg';

export function BrowseContainer() {
  const [profile, setProfile] = useState({});

  const user = {
    displayName: 'Karl',
    photoURL: '1',
  };

  const [category, setCategory] = useState('series');
  const [loading, setLoading] = useState(true);
  return profile.displayName ? (
    <>
      <Header src='joker1' dontShowOnSmallViewPorts>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
            <Header.Link
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
