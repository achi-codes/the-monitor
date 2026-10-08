import { useCallback, useMemo } from 'react';
import { getDomain } from '../lib/entities';
import { getIcon, getIconForDomain } from '../lib/icons.jsx';

function isHaIconName(name) {
  return typeof name === 'string' && name.includes(':');
}

function toStateObj(entity) {
  if (!entity?.id) return null;
  return {
    entity_id: entity.id,
    state: entity.state,
    attributes: entity.attributes || {},
  };
}

function HaIconElement({ icon, size, style, className }) {
  const ref = useCallback((node) => {
    if (node) node.icon = icon;
  }, [icon]);

  return (
    <ha-icon
      ref={ref}
      className={className}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    />
  );
}

function StateIconElement({ hass, stateObj, size, style, className }) {
  const ref = useCallback((node) => {
    if (!node) return;
    node.hass = hass;
    node.stateObj = stateObj;
  }, [hass, stateObj]);

  return (
    <state-icon
      ref={ref}
      className={className}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 0,
        ...style,
      }}
    />
  );
}

export default function EntityIcon({
  hass,
  entity,
  overrideIcon = '',
  size = 24,
  style = {},
  className = '',
}) {
  const stateObj = useMemo(() => toStateObj(entity), [entity]);
  const hasStateIcon = typeof customElements !== 'undefined' && customElements.get('state-icon');
  const hasHaIcon = typeof customElements !== 'undefined' && customElements.get('ha-icon');

  if (overrideIcon) {
    if (isHaIconName(overrideIcon) && hasHaIcon) {
      return <HaIconElement icon={overrideIcon} size={size} style={style} className={className} />;
    }
    return getIcon(overrideIcon, { size, style, className });
  }

  if (hasStateIcon && hass && stateObj && hass.states?.[stateObj.entity_id]) {
    return (
      <StateIconElement
        hass={hass}
        stateObj={stateObj}
        size={size}
        style={style}
        className={className}
      />
    );
  }

  const attributeIcon = entity?.attributes?.icon;
  if (attributeIcon && hasHaIcon) {
    return <HaIconElement icon={attributeIcon} size={size} style={style} className={className} />;
  }

  return getIcon(getIconForDomain(getDomain(entity?.id)), { size, style, className });
}
