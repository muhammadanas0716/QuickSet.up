import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface WelcomeEmailProps {
  name: string;
  actionUrl?: string;
}

export function WelcomeEmail({ name, actionUrl = '/' }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to our platform!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome, {name}!</Heading>
          <Text style={text}>
            Thank you for signing up. We&apos;re excited to have you on board.
          </Text>
          <Text style={text}>
            Get started by exploring your dashboard and setting up your first project.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={actionUrl}>
              Go to Dashboard
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            If you have any questions, feel free to{' '}
            <Link href="mailto:support@example.com" style={link}>
              contact us
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginTop: '40px',
  marginBottom: '40px',
  borderRadius: '8px',
  maxWidth: '560px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '32px',
  margin: '0 0 20px',
};

const text = {
  color: '#525252',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const buttonContainer = {
  margin: '24px 0',
};

const button = {
  backgroundColor: '#0ea5e9',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

const hr = {
  borderColor: '#e6e6e6',
  margin: '24px 0',
};

const footer = {
  color: '#8c8c8c',
  fontSize: '14px',
  lineHeight: '22px',
};

const link = {
  color: '#0ea5e9',
  textDecoration: 'underline',
};
