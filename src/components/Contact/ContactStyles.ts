import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;    
    @media ${props => props.theme.breakpoints.md}{
        flex-direction: column;
    }

    @media ${props => props.theme.breakpoints.sm}{
        flex-direction: column;
        
    }
`;

export const Left = styled.div`
    width: 50%;
    padding: auto;
    @media ${props => props.theme.breakpoints.md}{
        width: 100%;        
    }

    @media ${props => props.theme.breakpoints.sm}{
        width: 100%;        
    }
`;

export const Right = styled.div`
    width: 50%;
    padding: 3% 3% 0 0;
    
    @media ${props => props.theme.breakpoints.md}{
        width: 100%;        
    }

    @media ${props => props.theme.breakpoints.sm}{
        width: 100%;        
    }
    
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`;