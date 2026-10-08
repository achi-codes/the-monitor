import { Settings } from 'lucide-react';

const MOCK_PROFILES = [
  { id: 1, name: 'Papa', color: '#3b82f6' },
  { id: 2, name: 'Mama', color: '#f43f5e', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 3, name: 'Gast', color: '#10b981' },
];

export default function Profiles({ onSelect, onSettings }) {
  return (
    <div className="tm-full-screen tm-flex-col tm-flex-center" style={{ padding: '2rem', background: 'rgba(0,0,0,0.2)' }}>
      <h2 className="tm-title-xl tm-text-center" style={{ marginBottom: '3rem' }}>
        Wer ist da?
      </h2>

      <div className="tm-profile-grid">
        {MOCK_PROFILES.map((profile) => (
          <button
            key={profile.id}
            type="button"
            onClick={() => onSelect(profile)}
            className="tm-profile-card"
          >
            <div
              className="tm-profile-avatar-lg"
              style={{ backgroundColor: profile.image ? 'transparent' : profile.color }}
            >
              {profile.image ? (
                <img src={profile.image} alt={profile.name} className="tm-avatar-img" />
              ) : (
                <span style={{ textTransform: 'uppercase' }}>{profile.name[0]}</span>
              )}
            </div>
            <span className="tm-title-lg" style={{ fontSize: '1.5rem', fontWeight: 500, opacity: 0.8 }}>
              {profile.name}
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onSettings}
        className="tm-btn-round"
        style={{ position: 'absolute', bottom: '2rem', right: '2rem', opacity: 0.5 }}
        aria-label="Einstellungen"
      >
        <Settings size={32} />
      </button>
    </div>
  );
}
