import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'; // Using styled-components for more dynamic styling

// --- Keyframe Animations ---
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// --- Styled Components ---

const ProfileContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);  // Subtle gradient
  min-height: 100vh;
  color: #333;
  display: flex;
  flex-direction: column;
  overflow: hidden; // Prevent background overflow
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.95); // Slightly transparent for depth
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.4s ease-out;
`;

const ProfileImageContainer = styled.div`
  margin-right: 2rem;
  position: relative;
  transition: transform 0.2s ease; // Subtle hover effect

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #007bff; // Even more prominent border
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;  // Smooth transition for all properties

  &:hover {
    border-color: #0056b3; // Darker hover color
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
`;

const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const HeaderText = styled.div`
  flex: 1;
`;

const EditButton = styled.button`
  padding: 0.85rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.35rem;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
  outline: none; // Remove default focus outline
  &:hover {
    background-color: #0056b3;
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3); // Focus ring
  }
`;

const NavigationContainer = styled.nav`
  padding: 2rem;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.95);
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.4s ease-out;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavigationListItem = styled.li`
  padding: 1.2rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 1.05rem;
  font-weight: 500;
  border-radius: 0.35rem; // Rounded corners
  &:hover {
    background-color: #f0f4ff; // Lighter blue hover
    color: #007bff; // Blue text on hover
  }
  &:focus {
    background-color: #e8f0fe; // Light blue on focus
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3); // Focus ring
  }
  &:last-child {
    border-bottom: none;
  }
  &.active {
    background-color: #e8f0fe;
    color: #007bff;
    font-weight: bold;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.4s ease-out;
`;

const SectionHeading = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2c3e50; // A darker heading color
  border-bottom: 2px solid #007bff; // Underline
  padding-bottom: 0.5rem;
  display: inline-block; // So the underline only covers the text
`;

const OrderList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OrderListItem = styled.li`
  padding: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 1.05rem;
  transition: background-color 0.2s ease;
  border-radius: 0.35rem;
  &:hover {
    background-color: #f5f5f5;
  }
  &:last-child {
    border-bottom: none;
  }
`;

// --- Animated Background (Optional - can be removed) ---
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; // Behind everything else
  overflow: hidden; // To prevent particles from overflowing
`;

const Particle = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1); // Semi-transparent white
  border-radius: 50%;
  animation: ${spin} ${({ animationDuration }) => animationDuration}s linear infinite;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  opacity: ${({ opacity }) => opacity};
`;

function AnimatedBackground() {
    const numberOfParticles = 20; // Reduced number for performance
    const particles = [];

    for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 8 + 4; // Smaller particles
        const animationDuration = Math.random() * 15 + 10; // Longer animation
        const opacity = Math.random() * 0.5 + 0.2; // More transparency
        particles.push({
            key: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: size,
            animationDuration: animationDuration,
            opacity: opacity,
        });
    }

    return (
        <Background>
            {particles.map((particle) => (
                <Particle
                    key={particle.key}
                    top={particle.top}
                    left={particle.left}
                    size={particle.size}
                    animationDuration={particle.animationDuration}
                    opacity={particle.opacity}
                />
            ))}
        </Background>
    );
}


// --- Sub-components ---

function ProfileHeaderContent({ user, onProfilePictureChange, onEditProfile }) {
  return (
    <>
      <ProfileImageContainer>
        <ProfileImage src={user.profilePicture} alt="Profile" />
        <FileInput type="file" onChange={onProfilePictureChange} />
      </ProfileImageContainer>
      <HeaderText>
        <h2 style={{ margin: '0', fontSize: '1.9rem', fontWeight: 600 }}>{user.name}</h2>
        <EditButton onClick={onEditProfile}>Edit Profile</EditButton>
      </HeaderText>
    </>
  );
}

function ProfileNavigation({ onNavigate, activeTab }) {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationListItem
          onClick={() => onNavigate('orders')}
          className={activeTab === 'orders' ? 'active' : ''}
          tabIndex={0} // Add tabIndex for keyboard navigation
        >
          Order History
        </NavigationListItem>
        <NavigationListItem
          onClick={() => onNavigate('addresses')}
          className={activeTab === 'addresses' ? 'active' : ''}
          tabIndex={0}
        >
          Address Book
        </NavigationListItem>
        <NavigationListItem
          onClick={() => onNavigate('payments')}
          className={activeTab === 'payments' ? 'active' : ''}
          tabIndex={0}
        >
          Payment Methods
        </NavigationListItem>
        <NavigationListItem
          onClick={() => onNavigate('wishlist')}
          className={activeTab === 'wishlist' ? 'active' : ''}
          tabIndex={0}
        >
          Wishlist
        </NavigationListItem>
        <NavigationListItem
          onClick={() => onNavigate('settings')}
          className={activeTab === 'settings' ? 'active' : ''}
          tabIndex={0}
        >
          Profile Settings
        </NavigationListItem>
        <NavigationListItem
          onClick={() => onNavigate('rewards')}
          className={activeTab === 'rewards' ? 'active' : ''}
          tabIndex={0}
        >
          Rewards
        </NavigationListItem>
      </NavigationList>
    </NavigationContainer>
  );
}

function OrderHistory({ orders }) {
  return (
    <ContentContainer>
      <SectionHeading>Order History</SectionHeading>
      <OrderList>
        {orders.map((order) => (
          <OrderListItem key={order.id}>
            Order #{order.id}: {order.date} - {order.status}
          </OrderListItem>
        ))}
      </OrderList>
    </ContentContainer>
  );
}

// --- Main Component ---
function ProfilePage() {
  const [activeTab, setActiveTab] = useState('orders');
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd0228f28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  });
  const orders = [
    { id: 1, date: '2023-10-26', status: 'Shipped' },
    { id: 2, date: '2023-10-20', status: 'Delivered' },
    { id: 3, date: '2023-10-15', status: 'Shipped' },
  ];

  const handleNavigation = (tab) => {
    setActiveTab(tab);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUser({ ...user, profilePicture: URL.createObjectURL(file) });
    }
  };

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return <OrderHistory orders={orders} />;
      case 'addresses':
        return (
          <ContentContainer>Address Book Content</ContentContainer>
        );
      case 'payments':
        return (
          <ContentContainer>Payment Methods Content</ContentContainer>
        );
      case 'wishlist':
        return <ContentContainer>Wishlist Content</ContentContainer>;
      case 'settings':
        return <ContentContainer>Settings Content</ContentContainer>;
      case 'rewards':
        return <ContentContainer>Rewards Content</ContentContainer>;
      default:
        return <OrderHistory orders={orders} />;
    }
  };

  return (
    <ProfileContainer>
        <AnimatedBackground />
        <ProfileHeader>
          <ProfileHeaderContent
            user={user}
            onProfilePictureChange={handleProfilePictureChange}
            onEditProfile={handleEditProfile}
          />
        </ProfileHeader>
      <div style={{ display: 'flex', marginTop: '20px', flex: 1, overflow: 'hidden'}}>
        <ProfileNavigation onNavigate={handleNavigation} activeTab={activeTab} />
        {renderContent()}
      </div>
    </ProfileContainer>
  );
}

export default ProfilePage;