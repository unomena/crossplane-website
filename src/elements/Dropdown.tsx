import React from 'react';

import { styled } from '@mui/system';
import { Box } from '@mui/material';

import chevronDown from '/public/chevron-down.svg';
import chevronRight from '/public/chevron-right.svg';
import { useExpandable } from 'src/utils/hooks';
import { Anchor } from 'src/elements/Anchor';
import { If } from 'src/elements/If';
import { Img } from 'src/elements/Img';

const DropdownContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DropdownAnchor = styled(Anchor)``;

// const DropdownLinkChevron = styled(Img)`
//   width: 12px;
//   height: 12px;
//   margin-left: auto;
// `;

const DropdownContentContainer = styled(Box)<{ contentHeight: number }>`
  display: flex;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  height: ${({ contentHeight }) => contentHeight}px;
`;

const Dropdown: React.FC<{ children: [React.ReactNode, React.ReactNode]; className?: string }> = ({
  children,
  className,
}) => {
  const { isExpanded, setExpanded, contentRef, contentHeight } = useExpandable();
  const [linkChildren, ...contentChildren] = React.Children.toArray(children);

  return (
    <DropdownContainer>
      <DropdownAnchor bold={true} onClick={() => setExpanded(!isExpanded)} className={className}>
        {linkChildren}
        <Box
          sx={{
            ml: 'auto',
            width: 12,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <If is={isExpanded}>
            <Img src={chevronDown} alt="chevron" width={12} />
          </If>
          <If is={!isExpanded}>
            <Img src={chevronRight} alt="chevron" width={7} />
          </If>
        </Box>
      </DropdownAnchor>
      <DropdownContentContainer ref={contentRef} contentHeight={contentHeight}>
        {contentChildren}
      </DropdownContentContainer>
    </DropdownContainer>
  );
};

export { Dropdown };
