/*import { render, screen, waitFor } from '@testing-library/react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Navbar from '@/components/Navbar'

// Mock de `getKindeServerSession` et de `getUser`
jest.mock('@kinde-oss/kinde-auth-nextjs/server', () => ({
  getKindeServerSession: jest.fn().mockReturnValue({
    getUser: jest.fn().mockResolvedValue({
      email: 'test@example.com',
      name: 'John Doe',
    }),
  }),
}))

test('renders the Navbar', async () => {
  render(<Navbar />)

  // Attendez que les éléments asynchrones apparaissent
  await waitFor(() => screen.getByText('Sign out'))

  // Vérifiez si le bouton "Sign out" est présent dans le rendu
  expect(screen.getByText('Sign out')).toBeInTheDocument()

})*/
