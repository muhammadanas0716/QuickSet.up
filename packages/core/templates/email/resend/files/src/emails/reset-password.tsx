import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ResetPasswordEmailProps {
  resetUrl: string;
  expiresIn?: string;
}

export function ResetPasswordEmail({
  resetUrl,
  expiresIn = '1 hour',
}: ResetPasswordEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Reset your password</Heading>
          <Text style={text}>
            We received a request to reset your password. Click the button below to
            choose a new password.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={resetUrl}>
              Reset Password
            </Button>
          </Section>
          <Text style={text}>
            This link will expire in {expiresIn}. If you didn&apos;t request a password
            reset, you can safely ignore this email.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            If you&apos;re having trouble clicking the button, copy and paste this URL
            into your browser: {resetUrl}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ResetPasswordEmail;

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
  fontSize: '12px',
  lineHeight: '20px',
  wordBreak: 'break-all' as const,
};
