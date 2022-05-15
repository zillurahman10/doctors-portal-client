import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment
    const [user] = useAuthState()

    const handleBooking = e => {
        e.preventDefault()
        const date = e.target.date.value
        const slot = e.target.slot.value
        const name = e.target.name.value
        const phone = e.target.phone.value
        const email = e.target.email.value
        console.log(date, slot, name, phone, email);
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-4'>
                        <input name='date' type="text" placeholder="Type here" value={format(date, 'PP')} class="input input-bordered w-full my-2" disabled />
                        <select name='slot' class="select select-bordered w-full">
                            <option disabled selected>Select Slot Time</option>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' value={user?.displayName} type="text" placeholder="Full Name" class="input input-bordered w-full my-2" />
                        <input name='phone' type="number" placeholder="Phone Number" class="input input-bordered w-full my-2" />
                        <input value={user?.email} name='email' type="email" placeholder="Email" class="input input-bordered w-full my-2" />
                        <input type="submit" placeholder="Submit" class="btn w-full my-2" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;